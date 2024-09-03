import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function RecentTips() {
  return (
    <Card className="bg-gray-800 border-cyan-500 border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Recent Tips</CardTitle>
      </CardHeader>
      <CardContent>
        {[1, 2, 3].map((tip) => (
          <div
            key={tip}
            className="mb-4 p-4 bg-gray-700 rounded-lg border border-cyan-500"
          >
            <div className="flex items-center mb-2">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                <AvatarFallback>UT</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-pink-400">User{tip}</span>
              <Badge className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500">
                Pro Trader
              </Badge>
            </div>
            <p className="text-sm mb-2">
              BTC/USDT: Long @ $30,000 | Target: $32,000 | Stop: $29,000
            </p>
            <p className="text-xs text-gray-400">
              Analysis: Strong support at $30k, expecting a bounce to previous
              resistance...
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
