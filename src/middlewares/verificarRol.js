const verificarRol = (rolEsperado) => {
    return (req, res, next) => {
      if (req.user?.rol !== rolEsperado) {
        return res.status(403).json({ error: "Rol no autorizado" });
      }
      next();
    };
  };
  
  module.exports = verificarRol;
  