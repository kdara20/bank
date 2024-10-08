import React from "react";
import HeadBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  // const loggedIn = {
  //   firstName: "Kevin",
  //   lastName: "Dara",
  //   email: "jsmaster@gmail.com",
  // };
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) {
    return <div>User data is not available</div>;
  }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeadBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />
    </section>
  );
};

export default Home;
