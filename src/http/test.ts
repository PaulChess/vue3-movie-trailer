import { reactive, toRefs } from 'vue'
const testData = reactive({
  loading: false,
  error: true
})
export function testFunc() {
  console.log(toRefs(testData));
  return {
    ...toRefs(testData)
  }
}
