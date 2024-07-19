import { Header } from 'components/header/Header';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { staticPath } from 'utils/$path';
import { apiClient } from 'utils/apiClient';
import { travelSpotsAtom } from 'utils/travelSpotsAtom';
import styles from './index.module.css';

const TravelDestination = () => {
  const [userDestination, setUserDestination] = useState<string>('');
  const [, setTravelSpots] = useAtom(travelSpotsAtom);
  const router = useRouter();

  const fetchTravelSpots = async () => {
    const res = await apiClient.travelStartingSpot.$post({
      body: { destination: userDestination },
    });
    setTravelSpots(res);
    router.push('/travelSpotList');
  };
  const clickButton = async () => {
    const res = await apiClient.travelStartingSpot.$get({
      query: {
        spot: 'hello',
      },
    });
    console.log(res);
  };
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <h1 className={styles.title}>
          TravelDestination
          <br />
        </h1>
        {/* ここになにかしらのアイコン画像を入れいる */}
        <img
          src={staticPath.images.undraw_World_re_768g_png}
          alt="world Image"
          className={styles.image}
        />
        <button onClick={clickButton}>んぽた</button>
        <div className={styles.searchBox}>
          <div className={styles.normaltext}>行きたい場所を入力してください</div>
          <div className={styles.box}>
            <div className={styles.subject}>観光地</div>
            <input
              value={userDestination}
              onChange={(e) => setUserDestination(e.target.value)}
              className={styles.inp}
              placeholder="例:京都"
            />
          </div>

          <button onClick={fetchTravelSpots} className={styles.search}>
            検索
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelDestination;
