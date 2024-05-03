
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import LineChart from "@/components/line-chart"
import { CalendarIcon, ClockIcon, UsersIcon } from "@/components/ui/icons";

export default function Home() {
  return (
    <div className="grid gap-6 p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <UsersIcon className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">256</div>
            <p className="text-xs text-gray-500">↗︎ 12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
            <CalendarIcon className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">↗︎ 8% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <ClockIcon className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">431</div>
            <p className="text-xs text-gray-500">↗︎ 22% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="col-span-1 h-[350px] md:col-span-2">
          <CardHeader>
            <CardTitle>Client Growth</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 pr-6">
            <LineChart className="h-72 w-full" />
          </CardContent>
        </Card>
        <Card className="h-[350px]">
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="font-medium leading-none">Alice Baxter</p>
                  <p className="text-sm text-gray-500">June 8, 2023 at 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="font-medium leading-none">John Doe</p>
                  <p className="text-sm text-gray-500">June 9, 2023 at 2:30 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>SW</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="font-medium leading-none">Sarah Williams</p>
                  <p className="text-sm text-gray-500">June 10, 2023 at 11:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>SW</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="font-medium leading-none">Sarah Williams</p>
                  <p className="text-sm text-gray-500">June 10, 2023 at 11:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>SW</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="font-medium leading-none">Sarah Williams</p>
                  <p className="text-sm text-gray-500">June 10, 2023 at 11:00 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
