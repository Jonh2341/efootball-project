import React from "react";
import $ from "jquery";
import './App.css';
import { useState } from "react";
import seasonStats from "./storage/seasonStats.json";
import newsDataRaw from "./storage/news.json";

// 🔑 Типи для ключів сезону та структури новин
type SeasonKey = "seasonTwentySix" | "seasonTwentySeven" | "seasonTwentyEight";

// інтерфейс
interface NewsBlock {
  seasonTwentySix: string;
  seasonTwentySeven: string;
  seasonTwentyEight: string;
}

interface NewsData {
  HugeNews: NewsBlock;
  TopLeftNews: NewsBlock;
  LittleNews: NewsBlock;
  BottomSideNews: NewsBlock;
}

// підставляємо наші новини під інтерфейс
const newsData = newsDataRaw as NewsData;

function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [seasonStartAmount, setSeasonStartAmount] = useState(26);

  // утиліта: число -> ключ сезону
  const numberToSeasonKey = (n: number): SeasonKey => {
    const map: Record<number, SeasonKey> = {
      26: "seasonTwentySix",
      27: "seasonTwentySeven",
      28: "seasonTwentyEight",
      
    };
    return map[n];
  };

  // сезонні змінні
  const seasonKey = numberToSeasonKey(seasonStartAmount);

  const seasonAmountCounter = (arr: object) => Object.keys(arr);
  const seasonsLength = seasonAmountCounter(seasonStats).length - 1;

  // додавання кількості сезонів
  const incrementByOne = () => {
    if (seasonStartAmount !== 26 + seasonsLength) {
      setSeasonStartAmount(prev => prev + 1);
    }
  };

  // віднімання кількості сезонів
  const decrementByOne = () => {
    if (seasonStartAmount > 26) {
      setSeasonStartAmount(prev => prev - 1);
    } else {
      alert('Currently this is minimal season.');
    }
  };

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
  };

  // функція показування новин
  const showImage = (e: React.MouseEvent<HTMLDivElement>) => {
    const $img = $(e.currentTarget);

    for (const cls in configs) {
      if ($img.hasClass(cls)) {
        const { id, expanded, normal } = configs[cls];

        if (!isClicked) {
          setIsClicked(true);
          const backgroundXd = $("<div id='backgroundAll'></div>");
          $("body").append(backgroundXd);
          $('#backgroundAll').addClass('absolute z-[2] top-0 w-full h-full bg-white opacity-50');

          $(id).removeClass(normal).addClass(expanded);
        } else {
          setIsClicked(false);
          $('#backgroundAll').remove();
          $(id).removeClass(expanded).addClass(normal);
        }
      }
    }
  };

  // створюваш новин
  const createNews = (
    hugeNewUrl: string,
    topLeftNewUrl: string,
    littleNewUrl: string,
    bottomSideNewUrl: string
  ) => {
      return {
        hugeNew: (
          <div
            id="huge-new-id"
            className="huge-new bg-cover bg-no-repeat w-full h-full"
            style={{ backgroundImage: `url(${hugeNewUrl})` }}
            onClick={showImage}
          ></div>
        ),
        topLeftNew: (
          <div
            id="top-left-new"
            className="top-left-new bg-no-repeat w-full h-full bg-cover"
            style={{ backgroundImage: `url(${topLeftNewUrl})` }}
            onClick={showImage}
          ></div>
        ),
        littleNew: (
          <div
            id="little-new"
            className="little-new w-full h-full bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${littleNewUrl})` }}
            onClick={showImage}
          ></div>
        ),
        bottomSideNew: (
          <div
            id="bottom-side-new"
            className="bottom-side-new w-full h-full bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${bottomSideNewUrl})` }}
            onClick={showImage}
          ></div>
        ),
      };
  };

  // динамічні новини
  const { hugeNew, topLeftNew, littleNew, bottomSideNew } = createNews(
    newsData.HugeNews[seasonKey],
    newsData.TopLeftNews[seasonKey],
    newsData.LittleNews[seasonKey],
    newsData.BottomSideNews[seasonKey]
  );

  // виграш кубку
  const cupWinner = Object.values(seasonStats[seasonKey]).find(team => team.cupStatus == 'winner');

  return (
    <>
      <main className="home-container flex justify-between w-full h-[620px]">
        <section className="latest-news w-[80%] flex flex-col pt-[26px] pl-[36px] mb-[25px]">
          <span className="about w-[130px] bg-white p-[5px] text-[20px] mb-[17px]">Latest News:</span>
          <div className="news bg-white p-[10px] flex h-[525px]">
            <div className="huge-box w-[32%] mr-[10px]">
              {hugeNew}
            </div>
            <div className="smaller-news w-[68%] flex flex-col justify-between">
              <div className="top-side-news w-full h-[325px] flex justify-between">
                <div className="top-left-new-box w-[49%]">
                  {topLeftNew}
                </div>
                <div className="top-right-new w-[49%] flex flex-col text-center">
                  <div className="roller-box flex mt-[26px] justify-center">
                    <button className="previousSeason !mr-[15px]" onClick={decrementByOne}>&lt;</button>
                    <div className="roller">season {seasonStartAmount}</div>
                    <button className="nextSeason !ml-[15px]" onClick={incrementByOne}>&gt;</button>
                  </div>
                  <div className="little-new-box h-[251px] mt-[24px]">
                    {littleNew}
                  </div>
                </div>
              </div>
              <div className="bottom-side-new-box w-full h-[188px] mt-[5px]">
                {bottomSideNew}
              </div>
            </div>
          </div>
        </section>
        {/* every stat has been changed */}
        <section className="league-info relative w-[19%] h-[620px] flex flex-col bg-[#D2D2D2] p-[15px] z-[2]">
          <span className="about text-[20px]">league table:</span>
          <div className="league-table">
            {/* Headers */}
            <div className="header">#</div>
            <div className="header">G</div>
            <div className="header">W</div>
            <div className="header">L</div>
            <div className="header">D</div>
            <div className="header">P</div>

            {/* Rows */}
            {Object.entries(seasonStats[seasonKey] || {}).map(([team, stats]) => (
              <React.Fragment key={team}>
                <div className="cell"><img src={`../src/storage/${stats.icon}`} /></div>
                <div className="cell">{stats.wins + stats.loses}</div>
                <div className="cell">{stats.wins}</div>
                <div className="cell">{stats.loses}</div>
                <div className="cell">{stats.draws}</div>
                <div className="cell">{stats.wins * 3}</div>
              </React.Fragment>
            ))}
          </div>
          <span className="about">
            trophy winner: {cupWinner?.name ?? ''}
          </span>
        </section>
      </main>
    </>
  );
}

export default Home;