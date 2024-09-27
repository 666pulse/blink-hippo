import { Suspense } from 'react'
import MinerDashboard from './MinerDashboard'

async function fetchMinerData() {

  return {
    totalCoin: "458101396919",
    myCoin: "0",
    myShare: "0",
    minerLevel: "lv.1",
    unprotectedCollectionLimit: "10",
    collectTime: "10:30:00",
    myMinerBlink: "blinkhippo.io/miner/...",
    miners: [
      {
        addr: "...",
        level: "1",
        collectTime: "00:00:00",
        upgradedLevel: "1",
        totalLevel: "1",
        currentEpochCoin: "4",
        lastEpochCoin: "0",
        minerBlink: "blinkhippo.io/miner/..."
      }
    ]
  }
}

export default async function Page() {
  const minerData = await fetchMinerData()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MinerDashboard data={minerData} />
    </Suspense>
  )
}