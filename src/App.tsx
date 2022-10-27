import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Task } from "./components/Task"

export function App() {
  return (
    <div>
      <Header />
      <main className="w-screen flex justify-center">
        <Post />
      </main>
    </div>
  )
}
