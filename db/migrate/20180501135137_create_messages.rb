class CreateMessages < ActiveRecord::Migration[5.1]
  def up
    migration = Aws::Record::TableMigration.new(Message)
    migration.create!(
      provisioned_throughput: {
        read_capacity_units: 1,
        write_capacity_units: 1
      }
    )
    migration.wait_until_available
  end

  def down
    raise ActiveRecord::IrreversibleMigration
    # migration = Aws::Record::TableMigration.new(Message)
    # migration.delete!
  end
end
