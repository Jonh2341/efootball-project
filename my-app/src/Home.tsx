import $ from "jquery"
import './App.css'
import { useState } from "react"

function Home() {
  const [isClicked, setIsClicked] = useState(false)
  let season_amount = 26

  // конфіг для різних блоків
  const configs = {
    'huge-new': {
      id: '#huge-new-id',
      expanded: 'absolute z-[5] shadow-2xl bg-contain inset-0 m-auto h-[700px] w-[368px]',
      normal: 'w-full h-full bg-cover'
    },
    'top-left-new': {
      id: '#top-left-new',
      expanded: 'absolute z-[5] shadow-2xl bg-contain inset-0 m-auto h-[540px] w-[378px]',
      normal: 'w-full h-full bg-cover'
    },
    'little-new': {
      id: '#little-new',
      expanded: 'absolute z-[5] shadow-2xl bg-contain inset-0 m-auto h-[409px] w-[615px]',
      normal: 'w-full h-full'
    },
    'bottom-side-new': {
      id: '#bottom-side-new',
      expanded: 'absolute z-[5] shadow-2xl bg-contain inset-0 m-auto h-[359px] w-[687px]',
      normal: 'w-full h-full'
    }
  }

  const showImage = (e) => {
    const $img = $(e.currentTarget)

    Object.keys(configs).forEach(cls => {
      if ($img.hasClass(cls)) {
        const { id, expanded, normal } = configs[cls]

        if (!isClicked) {
          setIsClicked(true)
          const backgroundXd = $("<div id='backgroundAll'></div>")
          $("body").append(backgroundXd)
          $('#backgroundAll').addClass('absolute z-[2] top-0 w-full h-full bg-white opacity-50')

          $(id).removeClass(normal).addClass(expanded)
        } else {
          setIsClicked(false)
          $('#backgroundAll').remove()
          $(id).removeClass(expanded).addClass(normal)
        }
      }
    })
  }

  return (
    <main className="home-container flex justify-between w-full h-620px">
      <section className="latest-news w-[80%] flex flex-col pt-[26px] pl-[38px] mb-[25px]">
        <span className="about text-[20px] mb-[17px]">Latest News:</span>
        <div className="news flex h-[525px]">
          <div className="huge-box w-[32%] mr-[10px]">
            <div id="huge-new-id" className="huge-new bg-cover w-full h-full" onClick={showImage}></div>
          </div>
          <div className="smaller-news w-[68%] flex flex-col justify-between">
            <div className="top-side-news w-full h-[325px] flex justify-between">
              <div className="top-left-new-box w-[49%]">
                <div id="top-left-new" className="top-left-new w-full h-full bg-cover" onClick={showImage}></div>
              </div>
              <div className="top-right-new w-[49%] flex flex-col text-center">
                <div className="roller mt-[26px]">season {season_amount}</div>
                <div className="little-new-box h-[251px] mt-[24px]">
                  <div id='little-new' className="little-new w-full h-full" onClick={showImage}></div>
                </div>
              </div>
            </div>
            <div className="bottom-side-new-box w-full h-[188px]">
              <div id='bottom-side-new' className="bottom-side-new w-full h-full" onClick={showImage}></div>
            </div>
          </div>
        </div>
      </section>
      <section className="league-info w-[19%] h-[620px] flex flex-col bg-[#D2D2D2] p-[15px]">
        <span className="about text-[20px]">league table:</span>
        <div className="league-table">
          <div className="header header-w">W</div>
          <div className="header header-l">L</div>
          <div className="header header-s">S</div>
          <div className="header header-m">M</div>
          <div className="header header-p">P</div>

          <div className="rank rank-1">1.</div>
          <div className="cell cell-1-w">...</div>
          <div className="cell cell-1-l">...</div>
          <div className="cell cell-1-s">...</div>
          <div className="cell cell-1-m">...</div>
          <div className="cell cell-1-p">...</div>

          <div className="rank rank-2">2.</div>
          <div className="cell cell-2-w">...</div>
          <div className="cell cell-2-l">...</div>
          <div className="cell cell-2-s">...</div>
          <div className="cell cell-2-m">...</div>
          <div className="cell cell-2-p">...</div>
        </div>
      </section>
    </main>
  )
}

export default Home