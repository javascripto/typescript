# INICIANDO

```bash
md projeto && cd projeto
npm init -y
npm i -D typescript live-server concurrently

md -p src public/js
touch src/{module1,test}.ts public/index.html

nano tsconfig.json
```

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "amd",
    "rootDir": "src",
    "outDir": "public/js"
  }
}
```
