const index = (req, res, next) => {
    return res.json({ version: 'v1', time: Date.now() });
}

export default { index }