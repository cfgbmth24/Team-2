export default function LeaderBoard() {
    return (
      <div className="p-6 px-12 bg-gray-200 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-lg border rounded-lg">
          <div className="text-2xl font-bold text-center py-6">
            Leaderboard - Top Ticket Purchasers
          </div>
          <div className="divide-y divide-gray-300">
            {/* Leaderboard Entry 1 */}
            <div className="flex justify-between items-center px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="text-xl font-semibold text-gray-700">1</div>
                <div>
                  <div className="text-lg font-semibold">Jamie Dimon</div>
                  <div className="text-sm text-gray-600">J.P. Morgan</div>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold">9 Tickets</div>
              </div>
            </div>
            {/* Leaderboard Entry 2 */}
            <div className="flex justify-between items-center px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="text-xl font-semibold text-gray-700">2</div>
                <div>
                  <div className="text-lg font-semibold">Jane Smith</div>
                  <div className="text-sm text-gray-600">Bournemouth University</div>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold">7 Tickets</div>
              </div>
            </div>
            {/* ... Additional entries ... */}
            {/* Leaderboard Entry 3 */}
            <div className="flex justify-between items-center px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="text-xl font-semibold text-gray-700">3</div>
                <div>
                  <div className="text-lg font-semibold">Emma Johnson</div>
                  <div className="text-sm text-gray-600">Local School</div>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold">4 Tickets</div>
              </div>
            </div>
            {/* ... Additional entries ... */}
            {/* Leaderboard Entry 4 */}
            <div className="flex justify-between items-center px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="text-xl font-semibold text-gray-700">4</div>
                <div>
                  <div className="text-lg font-semibold">Mike Brown</div>
                  <div className="text-sm text-gray-600">Local Company</div>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold">3 Tickets</div>
              </div>
            </div>
            {/* Leaderboard Entry 5 */}
            <div className="flex justify-between items-center px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="text-xl font-semibold text-gray-700">5</div>
                <div>
                  <div className="text-lg font-semibold">Olivia Taylor</div>
                  <div className="text-sm text-gray-600">School Teacher</div>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold">2 Tickets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  