import {DefaultArtifactClient} from '@actions/artifact'

if (process.argv.length < 4) {
  console.error('usage `upload-artifact-cli artifact-name file [file ...]`');
  process.exit(1);
}

await new DefaultArtifactClient().uploadArtifact(
  process.argv[2],
  process.argv.slice(3),
  '.',
  {retentionDays: 1}
);
