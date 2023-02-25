export const Footer = () => {
  return (
    <div className="mt-10 border-t-2 border-solid border-t-gray-300">
      {/* Grid */}
      <div className="mx-auto grid max-w-[78rem] grid-cols-4 py-12">
        {/* 1- Col */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Panda</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-400">Compartir en</span>
              <span>
                {/* Iconos */}
                F, T y I
              </span>
            </div>
            <span className="text-sm text-gray-400">(+51)922860113</span>
            <span className="mt-4 text-sm text-gray-400">Outlet, 2023</span>
          </div>
        </div>
        {/* 2 - Col */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold tracking-[-1px]">Secciones</h2>
          <div className="flex flex-col gap-4 font-medium text-gray-600">
            <span className="text-sm">Inicio</span>
            <span className="text-sm">Categorías</span>
            <span className="text-sm">Nuevos productos</span>
            <span className="text-sm">Marcas</span>
            <span className="text-sm">Blog</span>
            <span className="text-sm">Sobre nosotros</span>
          </div>
        </div>
        {/* 3 - Col */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold tracking-[-1px]">Información</h2>
          <div className="flex flex-col gap-4 font-medium text-gray-600">
            <span className="text-sm">Términos y condiciones</span>
            <span className="text-sm">Preguntas frecuentes</span>
            <span className="text-sm">Delivery</span>
            <span className="text-sm">Devoluciones</span>
          </div>
        </div>
        {/* 4 - Col */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold tracking-[-1px]">Ayuda</h2>
          <div className="flex flex-col gap-4 font-medium text-gray-600">
            <span className="text-sm">Contáctanos</span>
            <span className="text-sm">Trabaja con nosotros</span>
            <span className="text-sm">Política de cookies</span>
            <span className="text-sm">Política de privacidad</span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="border-t-2 border-solid border-t-gray-300 py-4">
        <div className="mx-auto mx-auto flex max-w-[78rem] justify-between">
          <div className="flex flex-col gap-1">
            <h4 className="text font-semibold tracking-[-1px]">
              © TODOS LOS DERECHOS RESERVADOS
            </h4>
            <span className="text-sm">Panda S.A.C Lima, Perú</span>
          </div>
          <div className="flex items-end text-sm font-medium text-gray-400">
            Compra 100% Segura
          </div>
        </div>
      </div>
    </div>
  );
};
