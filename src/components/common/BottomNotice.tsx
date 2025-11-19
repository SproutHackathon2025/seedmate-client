'use client'
interface BottomNoticeProps {
  text: string
}

export function BottomNotice({ text }: BottomNoticeProps) {
  return (
    <div className="rounded-full bg-black/40 backdrop-blur-sm py-3 px-6 text-center w-fit">
      <p className="text-xs md:text-sm text-white/90">{text}</p>
    </div>
  )
}
