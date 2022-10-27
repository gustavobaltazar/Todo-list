import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Task } from "./components/Task"

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Post />
      </main>
    </div>
  )
}
