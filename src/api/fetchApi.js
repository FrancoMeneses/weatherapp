export const fetchApi = async (city) => {
  try {
    let query = await fetch(`http://api.positionstack.com/v1/forward?access_key=3f9130eaa0ec2fe1aba7e217e110db9c&query=${city}`, {
      referrerPolicy: "strict-origin"
    })
    let res = query.json()
    return res
  } catch (error) {
    console.log(error)
  }
}