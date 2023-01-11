import { faker } from '@faker-js/faker'

const mockReportData = [
  {
    id: 0,
    coords:{
      latitude: 37.7130,
      longitude: -122.4102
    },
    img: faker.image.nature(),
    status: "REVIEWED",
    title: "Report One",
    content: "report one content  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quo aperiam beatae culpa recusandae obcaecati eligendi sed ex corporis fugit similique perspiciatis, accusantium quia soluta rerum itaque, quaerat quibusdam nulla! ",
   
  },
  
  {
    id: 1,
    coords: {
      latitude: 37.7684,
      longitude: -122.4102
    },
    img: faker.image.nature(),
    status: "VERIFIED",
    title: "Report Two",
    content: "report two content  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quo aperiam beatae culpa recusandae obcaecati eligendi sed ex corporis fugit similique perspiciatis, accusantium quia soluta rerum itaque, quaerat quibusdam nulla!",
  },
  {
    id: 2,
    coords: {
      latitude: 37.7345,
      longitude: -122.5128
    },
    img: faker.image.nature(),
    status: "DISMISSED",
    title: "Report Three",
    content: "report three content  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quo aperiam beatae culpa recusandae obcaecati eligendi sed ex corporis fugit similique perspiciatis, accusantium quia soluta rerum itaque, quaerat quibusdam nulla!",
  },
]

export default mockReportData;