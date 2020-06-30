import loremGen from 'boot/lorem-ipsum'

export default function () {
  return {
    webinfo: {
      about: "Dalam keadaan gawat darurat sering orang kebingungan dan tidak tahu apa yang harus dilakukan untuk menangani keadaan tersebut. Untuk itu kita perlu bertindak preventif sebelum kondisi gawat darurat terjadi. Salah satu tindakan preventif yang kami lakukan adalah dengan membuat website Tenang ini. Tenang adalah website yang dibuat untuk menangani masalah-malasah yang terjadi dalam keadaan gawat darurat.",
      title: "Tenang",
      icon: ""
    },
    emergency: {
      kesehatan: [
        {
          id: "KS-001",
          name: "Pertolongan pertama dalam berbagai kondisi kesehatan",
          desc: loremGen.generateParagraphs(2),
          contentList: [
            {
              img: require("assets/img/health.jpg"), 
              content: loremGen.generateParagraphs(2)
            },
            {
              img: require("assets/img/health.jpg"), 
              content: loremGen.generateParagraphs(1)
            },
            {
              img: require("assets/img/health.jpg"), 
              content: loremGen.generateParagraphs(1)
            }
          ],
          img: require("assets/img/health.jpg")
        }
      ],
      kecelakaan: [
        { 
          id: "KC-001",
          name: "Kebocoran Gas",
          desc: loremGen.generateParagraphs(2),
          contentList: [
            {
              img: require("assets/img/health.jpg"), 
              content: loremGen.generateParagraphs(2)
            }
          ],
          img: require("assets/img/gas-leak.jpg")
        },
        {
          id: "KC-002",
          name: "Kebakaran rumah",
          desc: loremGen.generateParagraphs(2),
          contentList: [
            {
              img: require("assets/img/health.jpg"), 
              content: loremGen.generateParagraphs(2)
            }
          ],
          img: require("assets/img/fire-fighter.jpg")
        },
        {
          id: "KC-003",
          name: "Korsleting listrik",
          desc: loremGen.generateParagraphs(2),
          contentList: [
            {
              img: require("assets/img/health.jpg"), 
              content: loremGen.generateParagraphs(2)
            }
          ],
          img: require("assets/img/short-circuit.jpg")
        },
        {
          id: "KC-004",
          name: "Kecelakaan Lalu lintas",
          desc: loremGen.generateParagraphs(2),
          contentList: [
            {
              img: require("assets/img/health.jpg"), 
              content: loremGen.generateParagraphs(2)
            }
          ],
          img: require("assets/img/traffic-accident.jpg")
        },
        {
          id: "KC-005",
          name: "Terjebak di dalam lift",
          desc: loremGen.generateParagraphs(2),
          contentList: [
            {
              img: require("assets/img/health.jpg"), 
              content: loremGen.generateParagraphs(2)
            }
          ],
          img: require("assets/img/elevator-stuck.jpg")
        }
      ]
    }
  }
}
