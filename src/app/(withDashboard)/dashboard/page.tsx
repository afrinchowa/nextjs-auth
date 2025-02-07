import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged in user Email: {session?.user?.email}
          </h1>
          <Image
            src={session?.user?.image || "https://media.istockphoto.com/id/2149186896/vector/girl-working-on-laptop-vector-illustration-working-from-home-and-freelance-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q5C8EDR9kgzN6Q4hiAiWn4z_t0KezDPCCogNyKuj250="}
            alt="user image "
            width={100}
            height={100}
            className="mx-auto rounded-full mt-5"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
