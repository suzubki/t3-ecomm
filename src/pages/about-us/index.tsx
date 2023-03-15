import { MainLayout } from "~/components"
import Panda from "../../../public/panda.svg"

const AboutUsPage = () => {
  return (
    <MainLayout>
      <div className="mx-auto relative flex flex-col items-center justify-center">
        <Panda heigth={400} width={400} />
      </div>
      <div className="mx-auto max-w-[50rem]">
        <h1 className="text-4xl text-dark-primary text-center uppercase tracking-[-3px]">Sobre Nosotros</h1>
        <p className="mt-12 text-dark-primary tracking-[-.4px]">
        En Panda, somos más que una tienda en línea. Somos una comunidad de personas apasionadas por la moda, la tecnología, el hogar y el estilo de vida en general. Nuestro equipo está formado por expertos en cada una de estas áreas, lo que nos permite ofrecer una selección cuidadosamente curada de productos para satisfacer las necesidades de cada cliente.
        </p>
        <p className="mt-4 text-dark-primary tracking-[-.4px]">
        Asimismo, creemos en la importancia de la sostenibilidad. Es por eso que nos asociamos con proveedores y fabricantes que comparten nuestra pasión por la protección del medio ambiente. Nos esforzamos por ofrecer productos de alta calidad y asequibles que también sean éticos y sostenibles.
        </p>
        <p className="mt-4 text-dark-primary tracking-[-.4px]">
        Además, sabemos que nuestros clientes son nuestra razón de ser. Por lo tanto, siempre estamos dispuestos a escuchar sus comentarios y sugerencias. Nos esforzamos por ofrecer un servicio excepcional al cliente y hacemos todo lo posible para garantizar la satisfacción de nuestros clientes en cada etapa del proceso de compra.
        </p>
        <p className="mt-4 text-dark-primary tracking-[-.4px]">
        En resumen, en Panda estamos dedicados a ofrecer una experiencia de compra en línea única y excepcional. Esperamos que disfrutes navegando por nuestra selección de productos cuidadosamente seleccionados y que encuentres todo lo que necesitas para complementar tu estilo de vida. ¡Gracias por elegir Panda como tu tienda en línea de confianza!
        </p>
      </div>
    </MainLayout>
  )
}

export default AboutUsPage