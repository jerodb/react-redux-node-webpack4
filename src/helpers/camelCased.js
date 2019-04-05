/*
 ** Convert snake_case string to camelCase string
 */
export default s => s.replace(/_([a-z])/g, g => g[1].toUpperCase())
