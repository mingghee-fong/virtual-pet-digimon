export default function MoodIndicicator() {
  return (
    <>
      <div className="bar-container">
        <div className="bar">
          <p>Fullness</p>
          <div className="fullness-bar"></div>
        </div>
        <div className="bar2">
          <p>Happiness</p>
          <div className="happiness-bar"></div>
        </div>
      </div>
      {/* <div className="mood-container">
        <div className="mood">
          <img src="./img/happy.gif" alt="happy" />
        </div>
        <div className="mood">
          <img src="./img/angry.gif" alt="angry" />
        </div>
        <div className="mood">
          <img src="./img/hungry.gif" alt="hungry" />
        </div>
      </div> */}
    </>
  )
}
