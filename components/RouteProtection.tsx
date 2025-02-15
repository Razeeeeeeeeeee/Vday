import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface RouteProtectionProps {
  children: React.ReactNode;
  requiredClue: string;
}

const RouteProtection: React.FC<RouteProtectionProps> = ({
  children,
  requiredClue,
}) => {
  const router = useRouter();

  useEffect(() => {
    const clueCompleted = localStorage.getItem(`${requiredClue}`);

    if (!clueCompleted) {
      router.replace(`/${requiredClue}`);
    }
  }, [requiredClue, router]);

  return <>{children}</>;
};

export default RouteProtection;
