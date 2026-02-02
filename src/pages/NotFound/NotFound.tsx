import { faFaceFrown, faHouse, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NotFound() {
  return (
    <>
      <main className="flex-grow pt-20">
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s]" />
        </div>

        <div className="relative text-center px-4 max-w-lg mx-auto">
          <div className="relative mb-6">
            <h1 className="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 text-[140px] md:text-[180px] font-black text-orange-500/20 blur-2xl leading-none select-none pointer-events-none">
              404
            </div>
          </div>

          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30" />
            <div className="absolute inset-0 flex items-center justify-center">
             <FontAwesomeIcon icon={faFaceFrown} className="text-4xl text-orange-500" />
            </div>
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg rotate-12 animate-bounce" />
            <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              className="inline-flex items-center justify-center gap-2 group bg-[#EB5A0D] text-white py-3 px-4 rounded-full"
              href="/"
            >
              <FontAwesomeIcon icon={faHouse} className="w-5 h-5"/>
              الذهاب للرئيسية
            </a>

            <a
              className="inline-flex items-center justify-center hover:text-[#f1700c] gap-2 text-white py-3 px-4 rounded-full border border-neutral-700 hover:bg-[#2D190A] hover:border-[#f1700c] transition-all duration-500"
              href="/blog"
            >
             <FontAwesomeIcon icon={faNewspaper}/>
              تصفح المقالات
            </a>
          </div>

          <div className="pt-8 border-t border-[#262626]">
            <p className="text-sm text-neutral-500 mb-4">قد تجد هذه مفيدة:</p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                href="/blog"
              >
                المدونة
              </a>
              <span className="text-neutral-600">•</span>
              <a
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                href="/about"
              >
                من نحن
              </a>
              <span className="text-neutral-600">•</span>
              <a
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                href="/privacy"
              >
                الخصوصية
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    </>
  )
}

export default NotFound