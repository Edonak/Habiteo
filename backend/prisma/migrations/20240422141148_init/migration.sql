-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('LOCATAIRE', 'BAILLEUR');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "entityType" "EntityType" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "Critere" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maison" (
    "Matricule" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "surface" TEXT NOT NULL,
    "prix" TEXT NOT NULL,
    "nombreDePiece" INTEGER NOT NULL,
    "descripetion" TEXT,
    "photoUrl" TEXT NOT NULL,
    "disponibilite" BOOLEAN NOT NULL DEFAULT true,
    "proprietaire" TEXT NOT NULL,
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "Maison_pkey" PRIMARY KEY ("Matricule")
);

-- CreateTable
CREATE TABLE "Recherche" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "typeDeRecherche" "EntityType" NOT NULL,
    "Critere" BOOLEAN NOT NULL DEFAULT false,
    "resultat" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Recherche_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Effectuer" (
    "id" SERIAL NOT NULL,
    "RechercheId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Effectuer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Correspondre" (
    "id" SERIAL NOT NULL,
    "RechercheId" INTEGER NOT NULL,
    "maisonMatricule" INTEGER NOT NULL,

    CONSTRAINT "Correspondre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Maison" ADD CONSTRAINT "Maison_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Effectuer" ADD CONSTRAINT "Effectuer_RechercheId_fkey" FOREIGN KEY ("RechercheId") REFERENCES "Recherche"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Effectuer" ADD CONSTRAINT "Effectuer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Correspondre" ADD CONSTRAINT "Correspondre_RechercheId_fkey" FOREIGN KEY ("RechercheId") REFERENCES "Recherche"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Correspondre" ADD CONSTRAINT "Correspondre_maisonMatricule_fkey" FOREIGN KEY ("maisonMatricule") REFERENCES "Maison"("Matricule") ON DELETE RESTRICT ON UPDATE CASCADE;
