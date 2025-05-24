
import { Network as NetworkComponent } from "@/components/Network";
import { Navigation } from "@/components/Navigation";

const Network = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <NetworkComponent />
    </div>
  );
};

export default Network;
