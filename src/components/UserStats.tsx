import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AwardIcon } from "lucide-react";

export default function UserStats() {
  return (
    <Card className="bg-gray-800 border-cyan-500 border">
      <CardHeader>
        <CardTitle className="text-cyan-400 flex items-center">
          <AwardIcon className="mr-2" /> Your Stats
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Rank:</span>
            <span className="text-pink-400">#42</span>
          </div>
          <div className="flex justify-between">
            <span>Success Rate:</span>
            <span className="text-green-400">68%</span>
          </div>
          <div className="flex justify-between">
            <span>Total Tips:</span>
            <span>57</span>
          </div>
          <div className="flex justify-between">
            <span>Followers:</span>
            <span>128</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
