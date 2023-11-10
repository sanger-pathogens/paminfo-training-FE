# PaM Informatics - Frontend Test

The purpose of the test is to assess the candidates' skills in familiarising with frontend frameworks not necessarily known to them, working with Objects and HTML elements.

## Requirements

Have Node.js installed (visit: https://nodejs.org/en/).

Clone the repository:
`git clone <link>`

Open the project in your IDE and run the following:

```
cd frontend
npm install
npm run dev
```

Then visit: http://localhost:3000

## Important

The only relevant files to complete this exerise are:

- `src/routes/+page.svelte`
- `src/routes/constant_store.svelte`

There is no need to explore the rest of the contents/all the exercises can be completed by editing `src/routes/+page.svelte`

## Exercises

1. Onclick event

- Create a button which displays a "Hello World" message every time you click it (either as via console log or alert)
- Change the style of your button: e.g. make the background black/the text white

2. Fix the bug

- A 'file_format' object is being imported from `./constant_store.svelte`, but is not properly displaying "name" property values. Find out why, and fix the issue so that instead of "undefined", you see:

FASTA
FASTQ
BAM
SAM
VCF
GFF

3. Create and Populate a table
   Using the imported `file_format` object, display all of its properties/property values in a table
