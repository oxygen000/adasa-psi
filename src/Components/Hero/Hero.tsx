import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper';
import { faArrowRight, faCircleInfo, faFolderOpen, faPenNib, faUsers } from '@fortawesome/free-solid-svg-icons';


function Hero() {
  return (
    <>
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />

      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"
        style={{ animationDelay: "-2s" }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="section-label inline-flex items-center gap-2 mb-8 animate-fade-in bg-[#24160B] px-3 py-2 rounded-full border border-[#a15d28]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500/30" />
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            <span className="text-sm font-medium text-neutral-300 ">
              مرحباً بك في عدسة
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            اكتشف <span className="gradient-text">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              className=" inline-flex items-center justify-center gap-2 group bg-[#EB5A0D] text-white py-3 px-4 rounded-full"
              to="/blog"
            >
              <span>استكشف المقالات</span>
              <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180' />
            </Link>

            <Link
              className=" inline-flex items-center justify-center hover:text-[#f1700c] gap-2 text-white py-3 px-4 rounded-full border border-neutral-700 hover:bg-[#2D190A] hover:border-[#f1700c] transition-all duration-500"
              to="/about"
            >
              <FontAwesomeIcon icon={faCircleInfo} />
              <span>اعرف المزيد</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div
              className=" p-4 hover:scale-105 transition-all duration-300 bg-[#161616cc] rounded-3xl border border-[#262626]">
              <FontAwesomeIcon icon={faNewspaper} className='text-2xl text-orange-500 mb-1' />
              <p className="text-2xl md:text-3xl font-bold gradient-text text-[#FA9E1E]">+50</p>
              <p className="text-neutral-500 text-sm">مقالة</p>
            </div>

            <div
              className=" p-4 hover:scale-105 transition-all duration-300 bg-[#161616cc] rounded-3xl border border-[#262626]">
              <FontAwesomeIcon icon={faUsers} className='text-2xl text-orange-500 mb-1'/>
              <p className="text-2xl md:text-3xl font-bold gradient-text text-[#FA9E1E]">
                +10ألف
              </p>
              <p className="text-neutral-500 text-sm">قارئ</p>
            </div>

            <div
              className=" p-4 hover:scale-105 transition-all duration-300 bg-[#161616cc] rounded-3xl border border-[#262626]">
              <FontAwesomeIcon icon={faFolderOpen} className='text-2xl text-orange-500 mb-1'/>
              <p className="text-2xl md:text-3xl font-bold gradient-text text-[#FA9E1E]">4</p>
              <p className="text-neutral-500 text-sm">تصنيفات</p>
            </div>

            <div
              className=" p-4 hover:scale-105 transition-all duration-300 bg-[#161616cc] rounded-3xl border border-[#262626]"
              
            >
              <FontAwesomeIcon icon={faPenNib} className='text-2xl text-orange-500 mb-1'/>
              <p className="text-2xl md:text-3xl font-bold gradient-text text-[#FA9E1E]">6</p>
              <p className="text-neutral-500 text-sm ">كاتب</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero