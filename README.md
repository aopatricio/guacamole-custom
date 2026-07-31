# Raizen Branding

Extensão de branding para Apache Guacamole 1.6.0.

## Build

```bash
mvn clean package
```

O JAR será criado em

```
target/raizen-branding-1.0.0.jar
```

Copiar para

```
/etc/guacamole/extensions/
```

Depois reiniciar o container.

```
docker restart guacamole
```
