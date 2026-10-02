const {createApp} = Vue
const myApp = Vue.createApp({
    data(){
        return{
            ShowDetails: false,

            Tuitionclasses:[
                {
                    image:"",
                    SubjectName:"Maths",
                    Location:"Flacq",
                    AvailableSeats: 5,
                    Price: 450.00
                },
                {
                    image:"",
                    SubjectName:"English",
                    Location:"",
                    AvailableSeats: 5,
                    Price: .00
                },
                {
                    image:"",
                    SubjectName:"French",
                    Location:"",
                    AvailableSeats: 5,
                    Price: .00
                },
                {
                    image:"",
                    SubjectName:"Biology",
                    Location:"",
                    AvailableSeats: 5,
                    Price: .00
                },
                {
                    image:"",
                    SubjectName:"Chemistry",
                    Location:"",
                    AvailableSeats: 5,
                    Price: .00
                },
                {
                    image:"",
                    SubjectName:"Physics",
                    Location:"",
                    AvailableSeats: 5,
                    Price: .00
                },
                {
                    image:"",
                    SubjectName:"Additional Maths",
                    Location:"",
                    AvailableSeats: 5,
                    Price: .00
                },
                {
                    image:"",
                    SubjectName:"Computer Science",
                    Location:"",
                    AvailableSeats: 5,
                    Price: .00
                }
            ]
        }
    },
    methods:{

        showClassInfo(){
            this.ShowDetails = !(this.ShowDetails)
        }
    }
})
myApp.mount('#Home')