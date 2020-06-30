// import something here
import { getPlatform } from 'boot/util'
const platform = getPlatform()
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default ({app, router, Vue}) => {
  // something to do
  /*console.log("aaa")
  console.log("app",app)
  console.log("r",router)
  console.log("v",Vue)*/
  router.beforeEach((to, from, next) => {
      console.log(from)
      if(platform == "mobile" && !from.fullPath.includes("/m")){
          //router.push({name:"m-root"})
      }

      next()
  })
}
