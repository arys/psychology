import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BarChart, LineChart } from "../components/charts"

export default function ClientInfo() {
  return (
    <div className="p-6 grid gap-8">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder-avatar.jpg" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-semibold">Alice Baxter</h2>
          <p className="text-sm text-gray-500">alice@example.com</p>
        </div>
      </div>
      <Tabs defaultValue="info">
        <TabsList>
          <TabsTrigger value="info">Info</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <Card>
            <CardContent className="grid gap-6">
              <section>
                <h3 className="mb-4 text-lg font-medium">Personal Info</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input defaultValue="Alice Baxter" id="name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input defaultValue="alice@example.com" id="email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input defaultValue="555-123-4567" id="phone" />
                  </div>
                  <div>
                    <Label htmlFor="birthdate">Birthdate</Label>
                    <Input defaultValue="01/01/1990" id="birthdate" />
                  </div>
                </div>
              </section>
              <Separator />
              <section>
                <h3 className="mb-4 text-lg font-medium">Address</h3>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input defaultValue="123 Main St" id="address" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input defaultValue="Anytown" id="city" />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input defaultValue="CA" id="state" />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input defaultValue="12345" id="zip" />
                    </div>
                  </div>
                </div>
              </section>
              <Separator />
              <section>
                <h3 className="mb-4 text-lg font-medium">Emergency Contact</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="emergencyName">Name</Label>
                    <Input defaultValue="John Doe" id="emergencyName" />
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">Phone</Label>
                    <Input defaultValue="555-987-6543" id="emergencyPhone" />
                  </div>
                  <div>
                    <Label htmlFor="emergencyRelation">Relationship</Label>
                    <Input defaultValue="Spouse" id="emergencyRelation" />
                  </div>
                </div>
              </section>
              <Separator />
              <section>
                <h3 className="mb-4 text-lg font-medium">Additional Info</h3>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input defaultValue="Teacher" id="occupation" />
                  </div>
                  <div>
                    <Label htmlFor="referral">Referred By</Label>
                    <Input defaultValue="Dr. Smith" id="referral" />
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      defaultValue="Alice has been making good progress in therapy. She has been working on managing her anxiety and has shown improvement in her ability to cope with stress. Continue to monitor her progress and adjust treatment plan as needed."
                      id="notes"
                    />
                  </div>
                </div>
              </section>
              <Separator />
              <section>
                <h3 className="mb-4 text-lg font-medium">Treatment Methods</h3>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="treatment">Treatment Methods</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select treatment methods" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cbt">Cognitive Behavioral Therapy (CBT)</SelectItem>
                        <SelectItem value="mindfulness">Mindfulness Meditation</SelectItem>
                        <SelectItem value="exposure">Exposure Therapy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </section>
              <Separator />
              <section>
                <h3 className="mb-4 text-lg font-medium">Progress Charts</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium mb-1">Anxiety Levels</div>
                    <LineChart className="w-full aspect-[3/2]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Depression Scores</div>
                    <BarChart className="w-full aspect-[3/2]" />
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sessions">
          <div className="grid gap-6">
            <Card>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b">
                      <TableCell>5/8/2023</TableCell>
                      <TableCell>2:00 PM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>In-person</TableCell>
                      <TableCell>
                        <Badge variant="outline">Upcoming</Badge>
                      </TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow className="border-b">
                      <TableCell>5/1/2023</TableCell>
                      <TableCell>2:00 PM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>Virtual</TableCell>
                      <TableCell>
                        <Badge variant="outline">Completed</Badge>
                      </TableCell>
                      <TableCell>Discussed progress with anxiety management techniques</TableCell>
                    </TableRow>
                    <TableRow className="border-b">
                      <TableCell>4/24/2023</TableCell>
                      <TableCell>2:00 PM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>In-person</TableCell>
                      <TableCell>
                        <Badge variant="outline">Completed</Badge>
                      </TableCell>
                      <TableCell>Introduced mindfulness exercises</TableCell>
                    </TableRow>
                    <TableRow className="border-b">
                      <TableCell>4/17/2023</TableCell>
                      <TableCell>2:00 PM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>Virtual</TableCell>
                      <TableCell>
                        <Badge variant="outline">Completed</Badge>
                      </TableCell>
                      <TableCell>Reviewed CBT homework assignments</TableCell>
                    </TableRow>
                    <TableRow className="border-b">
                      <TableCell>4/10/2023</TableCell>
                      <TableCell>2:00 PM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>In-person</TableCell>
                      <TableCell>
                        <Badge variant="outline">Completed</Badge>
                      </TableCell>
                      <TableCell>Initial assessment and treatment planning</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="payments">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  <Label htmlFor="pricePerSession">Price per Session</Label>
                  <Input defaultValue="$150" id="pricePerSession" />
                </div>
                <div>
                  <div className="font-medium">Balance Due</div>
                  <div className="text-sm text-gray-500">$300</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>4/15/2023</TableCell>
                      <TableCell>$150</TableCell>
                      <TableCell>
                        <Badge variant="outline">Paid</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4/1/2023</TableCell>
                      <TableCell>$150</TableCell>
                      <TableCell>
                        <Badge variant="outline">Paid</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3/15/2023</TableCell>
                      <TableCell>$150</TableCell>
                      <TableCell>
                        <Badge
                          className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                          variant="outline"
                        >
                          Unpaid
                        </Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}