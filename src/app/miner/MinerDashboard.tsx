'use client'

import { useState } from 'react'

interface MinerData {
  totalCoin: string
  myCoin: string
  myShare: string
  minerLevel: string
  unprotectedCollectionLimit: string
  collectTime: string
  myMinerBlink: string
  miners: {
    addr: string
    level: string
    collectTime: string
    upgradedLevel: string
    totalLevel: string
    currentEpochCoin: string
    lastEpochCoin: string
    minerBlink: string
  }[]
}

export default function MinerDashboard({ data }: { data: MinerData }) {
  const [activeTab, setActiveTab] = useState('myTab')

  return (
    <div className="p-4 space-y-4 bg-gray-900 text-white">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-sm font-medium">Total Coin</h2>
          <p className="text-lg font-bold">{data.totalCoin}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium">My Coin</h2>
          <p className="text-lg font-bold">{data.myCoin}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium">My Share(%)</h2>
          <p className="text-lg font-bold">{data.myShare}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium">Miner Level</h2>
          <p className="text-lg font-bold">{data.minerLevel}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium">Unprotected Collection Limit</h2>
          <p className="text-lg font-bold">{data.unprotectedCollectionLimit}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium">Collect Time (UTC)</h2>
          <p className="text-lg font-bold">{data.collectTime}</p>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-medium">My Miner Blink</h2>
        <p className="text-lg font-bold">{data.myMinerBlink}</p>
      </div>
      <div>
        <div className="border-b border-gray-700">
          <button
            className={`px-4 py-2 ${activeTab === 'myTab' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('myTab')}
          >
            My Share List
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'activity' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
        </div>
        {activeTab === 'myTab' && (
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Star Miner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Collect Time (UTC)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">My Upgraded Level/Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Coin(Current Epoch)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Coin(Last Epoch)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Miner Blink</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {data.miners.map((miner, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{miner.addr}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{miner.level}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{miner.collectTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{miner.upgradedLevel}/{miner.totalLevel}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{miner.currentEpochCoin}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{miner.lastEpochCoin}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{miner.minerBlink}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'activity' && (
          <div className="mt-4">
            <p>Activity content would go here</p>
          </div>
        )}
      </div>
    </div>
  )
}