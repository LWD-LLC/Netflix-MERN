import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://occ-0-2120-2119.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWo6PvYPwTzE4ljHUN6yjTrEzxNIfRnS2T-nH8ZLOHzI5OfA45VhUDL--zpXODlOppfJjbRpnCIGlEA0aRNxl7DCH_tt.webp?r=2bc"/>
      <div className="info">
        <img src="https://occ-0-2120-2119.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSFeQCtbOqBC5QosQhyd-aAWQPBT48h-ZHOHwCAapoa30R7-v8u1zr0qm4OUxhyoBNc0unBgdJlivVm5Rc4yorcq0iu5xA6gBIvk_MrvV_Cn-kHSr2SYlSSPPmHfhQ_adt0R3FT4Ckp1v22A5SyN6zU4XEs99KPP_iIVCZvYsLQ9Gw.webp?r=63f" alt="" />
        <span className="desc">Decades after the tournament that changed their lives, the rivalry between Johnny and Daniel reignites in theis sequel to the "Karate Kid" films.</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}