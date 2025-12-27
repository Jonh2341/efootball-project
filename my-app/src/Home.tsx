import $ from "jquery"
import './App.css'
import { useState } from "react"
import seasonStats from "./storage/seasonStats.json";
import news from "./storage/news.json"

// seasons cycle
// Object.keys(seasonStats).forEach(season => {
//   console.log(seasonStats[season].Liverpool.cupStatus)
// })

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
    },
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
  
  let hugeNew = <div id="huge-new-id" className="huge-new bg-cover w-full h-full" onClick={showImage}></div>;
  let topLeftNew = <div id="top-left-new" className="top-left-new w-full h-full bg-cover" onClick={showImage}></div>;
  let littleNew = <div id='little-new' className="little-new w-full h-full" onClick={showImage}></div>;
  let bottomSideNew = <div id='bottom-side-new' className="bottom-side-new w-full h-full" onClick={showImage}></div>;


  return (
    <>
    <main className="home-container flex justify-between w-full h-620px">
      <section className="latest-news w-[80%] flex flex-col pt-[26px] pl-[38px] mb-[25px]">
        <span className="about text-[20px] mb-[17px]">Latest News:</span>
        <div className="news flex h-[525px]">
          <div className="huge-box w-[32%] mr-[10px]">
            {hugeNew}
          </div>
          <div className="smaller-news w-[68%] flex flex-col justify-between">
            <div className="top-side-news w-full h-[325px] flex justify-between">
              <div className="top-left-new-box w-[49%]">
                {topLeftNew}
              </div>
              <div className="top-right-new w-[49%] flex flex-col text-center">
                <div className="roller mt-[26px]">season {season_amount}</div>
                <div className="little-new-box h-[251px] mt-[24px]">
                  {littleNew}
                </div>
              </div>
            </div>
            <div className="bottom-side-new-box w-full h-[188px]">
              {bottomSideNew}
            </div>
          </div>
        </div>
      </section>
      <section className="league-info relative w-[19%] h-[620px] flex flex-col bg-[#D2D2D2] p-[15px] z-[2]">
        <span className="about text-[20px]">league table:</span>
        <div className="league-table">
          {/* Headers */}
          <div className="header">#</div>
          <div className="header">W</div>
          <div className="header">L</div>
          <div className="header">S</div>
          <div className="header">M</div>
          <div className="header">P</div>

          {/* Rows */}
          {Object.entries(seasonStats.seasonTwentySix).map(([team, stats], idx) => (
            <>
              <div className="cell"><img src={`../src/storage/${stats.icon}`} /></div>
              <div className="cell">{stats.wins}</div>
              <div className="cell">{stats.loses}</div>
              <div className="cell">{stats.scored}</div>
              <div className="cell">{stats.missed}</div>
              <div className="cell">{stats.wins * 3}</div>
            </>
          ))}
        </div>
        <span className="about">trophy winner: {seasonStats.seasonTwentySix.Tottenham.name}</span>
      </section>
    </main>
    </>
  )
}

export default Home