export default function validarId(req, res, next) {
    id = req.params.id;
    if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }
    next();
}
