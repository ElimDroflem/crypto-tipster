import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TipForm() {
  return (
    <Card className="bg-gray-800 border-cyan-500 border mb-8">
      <CardHeader>
        <CardTitle className="text-cyan-400">Post a Trading Tip</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <Input
            placeholder="Trading Pair (e.g., BTC/USDT)"
            className="bg-gray-700 border-cyan-500"
          />
          <Input
            placeholder="Entry Price"
            className="bg-gray-700 border-cyan-500"
          />
          <Input
            placeholder="Target Price"
            className="bg-gray-700 border-cyan-500"
          />
          <Input
            placeholder="Stop Loss"
            className="bg-gray-700 border-cyan-500"
          />
          <textarea
            placeholder="Analysis and Reasoning"
            className="w-full h-24 bg-gray-700 border-cyan-500 rounded-md p-2"
          ></textarea>
          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
            Post Tip
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
