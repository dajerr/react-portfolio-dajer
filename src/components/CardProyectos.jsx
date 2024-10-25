import {Card, CardHeader, CardBody, Image, Chip} from "@nextui-org/react";
import proximamenteImg from '../assets/imagenes/proximamente-img.webp'

export function CardProyectos({chipUno, title, img, altImg, chipColorUno}){
    return(

    <Card className="bg-[#d1c81a06] border py-4 w-fit">

      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="flex gap-x-2 py-2">
           <Chip color={chipColorUno} className="text-white" variant="dot">{chipUno || "proximamente"}</Chip>
           <Chip color="primary" className="text-white" variant="dot">Tailwind</Chip>
        </div>
        <h4 className="font-bold text-large text-white pb-2">{title || "Proximamente"}</h4>
      </CardHeader>

      <CardBody className="overflow-visible py-2">
        <a className="" href="">
          <Image
            isBlurred
            alt={altImg || "Proximamente"}
            className="object-cover rounded-xl hover:scale-105 "
            src={img || proximamenteImg}
            width={280}
            height={184}
          />
        </a>
      </CardBody>
    </Card>

    )
}