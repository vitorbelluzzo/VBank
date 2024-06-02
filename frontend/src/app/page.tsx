
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { 
  Button,
  buttonVariants 
 } from "@/components/ui/button"




 export default function App() {
  return (
    <div className="max-w-64 mx-auto mt-60">
      <Card className=" text-center  bg-zinc-900 text-white border-none rounded">
        <CardHeader >
          <CardTitle>Login</CardTitle>
          
        </CardHeader>
        <CardContent className="flex flex-col gap-3  ">
        <Input type="email"  placeholder="Email Address" className="bg-zinc-950 border-zinc-700 placeholder:text-zinc-600" />
        <Input type="password"  placeholder="Senha" className="bg-zinc-950 border-zinc-700 placeholder:text-zinc-600" />
        </CardContent>
        <CardFooter className="flex justify-center">
        <Button  className="bg-transparent rounded border w-full  bg-blue-600 hover:bg-blue-500 border-none   ">Logar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
