import { FaGolang } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { AiOutlineKubernetes } from "react-icons/ai";

import { Card, CardTitle, CardFooter, CardDescription, CardContent, CardHeader } from "./ui/card";
import { SiDocker,  SiLinux,   } from "react-icons/si";

export function Interest() {
  return (
    <Card className="max-w-lg w-full mx-auto p-8 rounded-2xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.80)] bg-white/80 shadow-xl/30 group backdrop-blur-md animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl text-center mb-4 text-gray-900 dark:text-white tracking-tight">Currently Learning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-4xl text-blue-500 dark:text-blue-400">
          <SiDocker className="h-15 w-15" title="Docker" />
          <AiOutlineKubernetes className="h-15 w-15" title="Kubernetes" />
          <SiLinux className="h-15 w-15" title="Linux" />
          <LuGithub className="h-15 w-15" title="GitHub" />
          {/* <SiNginx title="Nginx" /> */}
          <FaGolang className="h-15 w-15" title="Golang" />
        </div>
        <CardDescription className="text-center text-base text-muted-foreground leading-relaxed">
          Exploring containerization, orchestration, and backend technologies.<br />
          Building skills in DevOps tools and best practices.
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center text-center text-muted-foreground mt-6">
        <span className="font-semibold"></span>
      </CardFooter>
    </Card>
  );
}

