# 1. Base 이미지 설정 (Node.js 24 Alpine 사용)
FROM node:24-alpine AS base

# Corepack을 활성화하여 pnpm/yarn 버전을 자동으로 맞춤 (Node 24 내장)
RUN corepack enable

# 2. 의존성 설치 단계 (Dependencies)
FROM base AS deps
# Alpine에서 일부 라이브러리 호환성을 위해 libc6-compat 설치
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 패키지 매니저 설정 (pnpm, yarn, npm 모두 지원)
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# 의존성 설치 (Lock파일 기반으로 엄격하게 설치)
RUN if [ -f pnpm-lock.yaml ]; then pnpm i --frozen-lockfile;   elif [ -f yarn.lock ]; then yarn --frozen-lockfile;   elif [ -f package-lock.json ]; then npm ci;   else echo "Lockfile not found." && exit 1;   fi

# 3. 빌드 단계 (Builder)
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
# package.json에 정의된 프로덕션 빌드 스크립트 실행
RUN pnpm run build:prod

# 4. 프로덕션 실행 단계 (Runner)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# non-root user 'nextjs' 생성하여 보안 강화
RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs

# Standalone 모드에서 생성된 파일 복사
# .next/standalone 디렉토리의 소유자를 nextjs 사용자로 변경
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone .
# public 디렉토리 복사
COPY --from=builder /app/public ./public
# .next/static 디렉토리 복사
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

# 서버 실행 (standalone 폴더의 server.js 실행)
CMD ["node", "server.js"]