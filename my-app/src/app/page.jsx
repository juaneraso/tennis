
import Link from "next/link";
import styles from "./page.module.css";

// import Boton from "./Boton/page";
// import Login from "./login/page";

export default function Home() {
  return (
    <main >
     <h1>Principal</h1>

    <Link href={"/login"}>

    
     <button>Login</button>

     </Link>
     
    </main>
  );
}
