try {
  kuzzle->index->refresh("nyc-open-data");

  std::cout << "O shards fail to refresh" << std::endl;
} catch (KuzzleException e) {
  std::cerr << e.getMessage() << std::endl;
}
