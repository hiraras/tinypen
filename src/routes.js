import Home from "@/views/Home.vue";
import Collection from "@/views/Collection.vue";
import Debug from "@/views/Debug.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/collection", component: Collection },
  { path: "/debug", component: Debug },
];

export default routes;
