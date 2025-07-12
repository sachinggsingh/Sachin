import { Card, CardTitle, CardFooter, CardDescription, CardContent, CardHeader } from "./ui/card";
import { SiDocker, SiKubernetes, SiLinux, SiGithub, SiNginx } from "react-icons/si";
import { FaCloud } from "react-icons/fa";

export function Interest() {
  return (
    <Card className="max-w-lg w-full mx-auto p-8 rounded-2xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.80)] bg-white/80 shadow-xl group backdrop-blur-md animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl text-center mb-4 text-gray-900 dark:text-white tracking-tight">Currently Learning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-4xl text-blue-500 dark:text-blue-400">
          <SiDocker title="Docker" />
          <SiKubernetes title="Kubernetes" />
          <SiLinux title="Linux" />
          <SiGithub title="GitHub" />
          <SiNginx title="Nginx" />
          <FaCloud title="Cloud" />
        </div>
        <CardDescription className="text-center text-base text-muted-foreground leading-relaxed">
          Exploring containerization, orchestration, and cloud technologies.<br />
          Building skills in DevOps tools and best practices.
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center text-center text-muted-foreground mt-6">
        <span className="font-semibold"></span>
      </CardFooter>
    </Card>
  );
}

