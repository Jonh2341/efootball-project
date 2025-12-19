import './App.css'

function Home() {
    return (
        <>
            <main className="home-container flex justify-between w-full h-620px">
                <section className="latest-news w-[80%] flex flex-col pt-[26px] pl-[38px] mb-[25px]">
                    <span className="about text-[20px] mb-[17px]">Latest News:</span>
                    <div className="news flex h-[525px]">
                        <div className="huge-new w-[32%] mr-[10px]"></div>
                        <div className="smaller-news w-[68%] flex flex-col justify-between">
                            <div className="top-side-news w-full h-[325px] flex justify-between">
                                <div className="top-left-new w-[49%]"></div>
                                <div className="top-right-new w-[49%] flex flex-col text-center">
                                    <div className="roller mt-[26px]">season </div>
                                    <div className="little-new h-[251px] mt-[24px]"></div>
                                </div>
                            </div>
                            <div className="bottom-side-new w-full h-[188px]"></div>
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
        </>
    )
}

export default Home