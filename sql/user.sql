CREATE TABLE "user" (
	id uuid NOT NULL CONSTRAINT user_pk PRIMARY KEY,
	username CHARACTER VARYING(255) NOT NULL,
	experience INTEGER NOT NULL,
	"deletedAt" CHARACTER VARYING(255),
	"createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	"updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE "user" OWNER TO "dbUser";

CREATE UNIQUE INDEX user_username_uindex ON "user" (username);