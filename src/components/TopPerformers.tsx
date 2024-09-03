import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUpIcon } from "lucide-react";

export default function TopPerformers() {
  return (
    <Card className="bg-gray-800 border-cyan-500 border mb-8">
      <CardHeader>
        <CardTitle className="text-cyan-400 flex items-center">
          <TrendingUpIcon className="mr-2" /> Top Performers
        </CardTitle>
      </CardHeader>
      <CardContent>
        {[1, 2, 3, 4, 5].map((rank) => (
          <div key={rank} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-4 text-pink-500">
                {rank}
              </span>
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                <AvatarFallback>TP</AvatarFallback>
              </Avatar>
              <span className="font-semibold">Trader{rank}</span>
            </div>
            <span className="text-green-400">+{95 - rank * 5}%</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
