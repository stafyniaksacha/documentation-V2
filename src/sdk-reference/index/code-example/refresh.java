try{
  kuzzle.getIndex().refresh("nyc-open-data");

  System.out.println("O shards fail to refresh");
} catch (KuzzleException e) {
    System.err.println(e.getMessage());
}
